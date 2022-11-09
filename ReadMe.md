
# Site224 - An open source locations directory app for Guinea 🇬🇳

## About the project

### Overview

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

3. The third part is **DevOps**. This involves building a docker file and docker image to facilitate deployment of the WebApp built in Step 2, to cloud providers such as AWS, GCP or Azure.

### Timeline
- Entire project to be built in a couple of evenings over the span of a week.
- ~~Self-imposed deadline: Week ending 13th November~~ ✅ (Completed)

____

## Project Documentation

### Folder structure of the repository

```
Root 
└── Data Pipeline
└── Web Application
    └── site224
    └── site224api
```
The above tree is a representation of the current project setup / folder structure;

* The Data Pipeline folder contains all files related to the first part of the project (Data Engineering).
* The Web application folder contains two sub-folders.
	* The first folder "*site224*" is the front-end app built with Next.Js
	* The second folder "*site224api*" contains back-end api built with Java Springboot

### Backend API

At present, the built API is live and freely accessible by anyone. There is also currently no rate limiting (although likely to change in the future). If you find any bugs or encounter a problem, please raise an issue.

**Live Endpoint:** `https://api.site224.com`

#### Locations Object

Locations are live under `/locations/` and can be queried with optional parameters "City", "ParentCategory" and "Category". By default, only the first 5 results are returned (due to pagination design). To return all results, use `/locationsAll/`

Field | Description
------|------------
**id** | The location's unique id.
parentCategory | The parent category of the location object. Ex: *Administration*
category | The type/category of the location object. Ex: *Embassy*
city | The name of the city. 
name | The name of the location object. Ex: *Embassy of Egypt*
latitude | The latitudinal coordinates of the location object
longitude | The longitudinal coordinates of the location object

#### Example Usage

Below is an example in python for fetching the list of all **Banks** in the capital city **Conakry**:

```python
import requests

headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
}
params = {
    'city': 'conakry',
    'category': 'bank',
}
response = requests.get('https://api.site224.com/locationsAll', params=params, headers=headers)
```


### Deploying the Webapp via Docker

*Please note that the below only covers the front-end web app.*

The dockerfile from which the docker image for the front-end web-app is built, can be found within the webapp's corresponding directory at:

```
Root 
└── Web Application
    └── site224
```
Alternatively, you can find a copy of the built image on [DockerHub (Link)](https://hub.docker.com/r/inimaga/site224).

Using the image on DockerHub, deploying to a VPS provider such as Linode or DigitalOcean, or to a major cloud service such as AWS, Azure or GCP should be relatively trivial.


## Copyright / License

This project is licensed under the [GNU General Public License](https://github.com/inimaga/Site224/blob/main/LICENSE.md)

Copyright 2022 - [Fabudable Technologies Ltd.](https://fabudable.com/en) | [Issa Nimaga](https://issanimaga.com/contact/)