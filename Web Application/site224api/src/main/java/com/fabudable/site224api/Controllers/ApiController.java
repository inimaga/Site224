package com.fabudable.site224api.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import com.fabudable.site224api.Models.Location;
import com.fabudable.site224api.Interface.LocationInterface;

@RestController
public class ApiController {

    private static final String template = "Hello, %s! <br/>Welcome to Site224's API Endpoint :)";

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format(template, name);
    }

    @Autowired
    private LocationInterface locationInterface;

    @RequestMapping(method = RequestMethod.GET, path = "/locations")
    public List<Location> getLocations(@RequestParam(value = "city", defaultValue = "") String city,
                                       @RequestParam(value = "parentCategory", defaultValue = "") String parentCategory,
                                       @RequestParam(value = "category", defaultValue = "") String category,
                                       @RequestParam(value = "page", defaultValue = "0") int pageNumber
                                       ) {
        int resultsPerPage = 5;
                                        
        if (!city.isEmpty() && !parentCategory.isEmpty() && !category.isEmpty()) {
            return locationInterface.findByCityAndParentCategoryAndCategory(city, parentCategory, category, PageRequest.of(pageNumber, resultsPerPage));
        } else if (!city.isEmpty() && !parentCategory.isEmpty()) {
            return locationInterface.findByCityAndParentCategory(city, parentCategory, PageRequest.of(pageNumber, resultsPerPage));
        } else if (!parentCategory.isEmpty() && !category.isEmpty()) {
            return locationInterface.findByParentCategoryAndCategory(parentCategory, category, PageRequest.of(pageNumber, resultsPerPage));
        } else if (!city.isEmpty() && !category.isEmpty()) {
            return locationInterface.findByCityAndCategory(city, category, PageRequest.of(pageNumber, resultsPerPage));
        } else if (!city.isEmpty()) {
            return locationInterface.findByCity(city, PageRequest.of(pageNumber, resultsPerPage));
        } else if (!parentCategory.isEmpty()) {
            return locationInterface.findByParentCategory(parentCategory, PageRequest.of(pageNumber, resultsPerPage));
        } else if (!category.isEmpty()) {
            return locationInterface.findByCategory(category, PageRequest.of(pageNumber, resultsPerPage));
        }

        return locationInterface.findAll(PageRequest.of(pageNumber, resultsPerPage)).getContent();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/NumberOfLocations")
    public int getNumberOfLocations(@RequestParam(value = "city", defaultValue = "") String city,
                                       @RequestParam(value = "parentCategory", defaultValue = "") String parentCategory,
                                       @RequestParam(value = "category", defaultValue = "") String category,
                                       @RequestParam(value = "page", defaultValue = "0") int pageNumber
                                       ) {
                                        
        if (!city.isEmpty() && !parentCategory.isEmpty() && !category.isEmpty()) {
            return locationInterface.countByCityAndParentCategoryAndCategory(city, parentCategory, category);
        } else if (!city.isEmpty() && !parentCategory.isEmpty()) {
            return locationInterface.countByCityAndParentCategory(city, parentCategory);
        } else if (!parentCategory.isEmpty() && !category.isEmpty()) {
            return locationInterface.countByParentCategoryAndCategory(parentCategory, category);
        } else if (!city.isEmpty() && !category.isEmpty()) {
            return locationInterface.countByCityAndCategory(city, category);
        } else if (!city.isEmpty()) {
            return locationInterface.countByCity(city);
        } else if (!parentCategory.isEmpty()) {
            return locationInterface.countByParentCategory(parentCategory);
        } else if (!category.isEmpty()) {
            return locationInterface.countByCategory(category);
        };

        return locationInterface.findAll().size();
    }


    //Endpoint to get locations by city
    @RequestMapping(method = RequestMethod.GET, path = "/locations/{city}")
    public List<Location> getLocationsByCity(@PathVariable String city) {
        return locationInterface.findByCity(city, PageRequest.of(0, 5));
    }

    //Endpoint to get locations by parent category
    @RequestMapping(method = RequestMethod.GET, path = "/locations/parentCategory/{parentCategory}")
    public List<Location> getLocationsByParentCategory(@PathVariable String parentCategory) {
        return locationInterface.findByParentCategory(parentCategory, PageRequest.of(0, 100));
    }

    //Endpoint to get locations by category
    @RequestMapping(method = RequestMethod.GET, path = "/locations/category/{category}")
    public List<Location> getLocationsByCategory(@PathVariable String category) {
        return locationInterface.findByCategory(category, PageRequest.of(0, 100));
    }


    //// The below set of code has been temporarily commented out till implementation of authorisation is complete
    /* 
    @RequestMapping(method = RequestMethod.POST, path = "/addLocation")
    public String addLocation(@Valid @RequestBody Location location) {
        locationInterface.save(location);
        return "Location saved";
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/updateLocation/{id}")
    public String updateLocation(@PathVariable long id, @Valid @RequestBody Location location) {
        locationInterface.save(location);
        return "Location Updated...";
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/deleteLocation/{id}")
    public String deleteLocation(@PathVariable long id) {
        locationInterface.deleteById(id);
        return "Location Deleted...";
    } */
}
