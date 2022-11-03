
# Site224 - An open source locations directory app for Guinea, Conakry - WebApp Documentation

## API Documentation

Available entry points:

* {api_endpoint}/locations : By default, returns the list of all locations in the database. Supports passing in parameters for "city", "parentCategory", and "category".
* {api_endpoint}/locations/{city} : returns a list of all locations in {city}
* {api_endpoint}/locations/parentCategory/{parentCategory} : returns a list of all locations with the parent category; {parentCategory}
* {api_endpoint}/locations/category/{category} : returns a list of all locations with the category; {category}

