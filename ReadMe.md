
# Site224 - An open source locations directory app for Guinea  🇬🇳

## About the project

This open source project is being created to demonstrate my full-stack programming skills, and usage of different technology stacks. The project involves creating a locations directory for the country Guinea, using data from Open Street Maps, to be consumed by the end-user via a webapp with pleasant UI interface. 

* _Languages being utilised:_ Python, Java, & JavaScript
* _Frameworks being utilised:_ Spring Boot, React/Next.Js, & Tailwind
* _Other Tools to use:_ MySQL (SQL), & Docker

### Breakdown
The project is comprised of 3 parts:

1. The first part is **Data Engineering**, and constituted building a locally ran data pipeline using python. The built solution takes in OpenStreetMap data extracts (.shp files) as Inputs, and outputs a .CSV file of cleaned/refined data that can be loaded into any database. Over 2 million records were processed at this stage.
2. The second part is **Full-stack web development**, and involved building a web-app to consume the data generated in part 1. This part is made up of two parallel phases; 
	1. Build of the backend/API of the web-app using Java (Spring Boot), and
	2. Build of the front-end using React/NextJs. 

	This particular choice of stack is due to its ubiquity across organisations today.

3. The third part is **DevOps**. This involves building a dockerized file to facilitate deployment of the WebApp built in Step 2, to cloud platforms such as AWS, GCP or Azure.


### Timeline
- Entire project to be built in a couple of evenings over the span of a week. :) 
- Self-imposed deadline: Week ending 13th November


### Screenshot of Homepage (as at 6th November 2022)

<center><img src="https://raw.githubusercontent.com/inimaga/Site224/main/HomePage.png" alt="Site224 Homepage" height="700"/></center>
