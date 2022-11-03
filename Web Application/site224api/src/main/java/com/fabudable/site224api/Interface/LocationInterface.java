package com.fabudable.site224api.Interface;

import com.fabudable.site224api.Models.Location;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationInterface extends JpaRepository<Location, Long> {
    
    public List<Location> findByCity(String city);

    public List<Location> findByParentCategory(String parentCategory);

    public List<Location> findByCategory(String category);

    public List<Location> findByCityAndParentCategoryAndCategory(String city, String parentCategory, String category);

    public List<Location> findByCityAndParentCategory(String city, String parentCategory);

    public List<Location> findByParentCategoryAndCategory(String parentCategory, String category);

    public List<Location> findByCityAndCategory(String city, String category);
}