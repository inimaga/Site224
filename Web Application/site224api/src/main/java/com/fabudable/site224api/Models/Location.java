package com.fabudable.site224api.Models;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Parent Category is required")
    @Column(name = "parent_category", nullable = false)
    private String parentCategory;

    @NotNull(message = "Category is required")
    @Column(name = "category", nullable = false)
    private String category;

    @NotNull(message = "City is required")
    @Column(name = "city", nullable = false)
    private String city;

    @NotNull(message = "Name is required")
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull(message = "Latitude is required")
    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @NotNull(message = "Longitude is required")
    @Column(name = "longitude", nullable = false)
    private Double longitude;

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

    public void setId(Long id) {
        this.id = id;
    }

    public void setParentCategory(String parentCategory) {
        this.parentCategory = parentCategory;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
