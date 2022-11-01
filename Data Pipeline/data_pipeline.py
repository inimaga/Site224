## Site224 data pipeline
## Takes a bunch of inputs (mostly .SHP files from Open Street Maps) and outputs a clean CSV file

import geopandas as gpd
import pandas as pd
import os
import reverse_geocode

class s224_data_pipeline():
    def __init__(self):
        self.status = "Initialized"

    # Function for reading all .shp files in an input directory, and returning a geopandas dataframe
    def read_shp_files(self, input_dir):
        # Reading all .shp files in the input directory
        gdf = gpd.GeoDataFrame()
        for file in os.listdir(input_dir):
            if file.endswith(".shp"):
                gdf = gdf.append(gpd.read_file(os.path.join(input_dir, file)))
        return gdf
    
    # Function for custom processing OSM geodataframe and returning a clean dataframe
    def process_osm_gdf(self, input_df):
        # Filtering out all the unwanted columns, by specifying wanted columns
        input_df = input_df[['osm_id', 'code', 'fclass', 'name', 'geometry']]
        # Filtering out all rows that do not have a name
        input_df = input_df[input_df['name'].notna()]
        # Creating latitudes and longitudes columns from the geometry column
        input_df = self.create_lat_lon_columns(input_df)
        return input_df

    # Function for creating latitudes and longitudes columns from the geometry column in a geodataframe
    def create_lat_lon_columns(self, input_df):
        # Creating latitudes and longitudes columns from the geometry column
        input_df['lat'] = input_df['geometry'].apply(lambda x: x.centroid.y)
        input_df['lon'] = input_df['geometry'].apply(lambda x: x.centroid.x)
        # Dropping the geometry column
        input_df = input_df.drop(columns=['geometry'])
        return input_df
    
    
if __name__ == '__main__':
    OSM_data = s224_data_pipeline().read_shp_files("./Input/OpenStreetMap Data/")
    OSM_data = s224_data_pipeline().process_osm_gdf(OSM_data)
    
    ### Local caching of the OSM data ## Useful during testing/debugging
    # OSM_data.to_csv("./Output/OSM_data.csv")
    # OSM_data = pd.read_csv("./Output/OSM_Debug.csv")  # Debugging output
    ### End of local caching
    

    ## Enriching OSM data with manual excel mapping and reverse geocoding
    selected_fclass = pd.read_excel("./Input/Manually Selected FClasses.xlsx", "Selected fclass")
    OSM_data = pd.merge(OSM_data, selected_fclass, on='fclass', how='left', indicator=True)
    OSM_data = OSM_data.loc[:, ~OSM_data.columns.str.contains('^Unnamed')]
    OSM_data = OSM_data[(OSM_data['Selected fclass'].isnull()) | (OSM_data['Selected fclass'] == 'Yes')]
    OSM_data['Category'] = OSM_data['fclass'].str.title().str.replace('_', ' ')
    # Reverse geocoding
    OSM_data['City'] = OSM_data.apply(lambda x: reverse_geocode.search([(x['lat'], x['lon'])])[0]['city'], axis=1)
    # Dropping unnecessary columns in OSM_data
    OSM_data = OSM_data.drop(columns=['code', 'fclass', 'Selected fclass', '_merge'])

    # Reordering columns in OSM_data
    OSM_data = OSM_data[['osm_id', 'Parent Category', 'Category', 'City', 'name', 'lat', 'lon']]
    # Sort OSM_data by the column 'Parent Category', then by the column 'Category', then by the column 'City'
    OSM_data = OSM_data.sort_values(by=['Parent Category', 'Category', 'City'])

    # Outputting OSM_data to a CSV file
    OSM_data.to_csv("./Output/Guinea_places_data.csv")