package com.fabudable.site224api;

public class Location {
    private Long id;
    private String parentCategory;
    private String category;
    private String city;
    private String name;
    private Double latitude;
    private Double longitude;


    public Location(Long id, String parentCategory, String category, String city, String name, Double latitude, Double longitude) {
        this.id = id;
        this.parentCategory = parentCategory;
        this.category = category;
        this.city = city;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }

    public String getParentCategory() {
        return parentCategory;
    }

    public String getCategory() {
        return category;
    }

    public String getCity() {
        return city;
    }

    public String getName() {
        return name;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }
}
