package com.fabudable.site224api.Interface;

import com.fabudable.site224api.Models.Location;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationInterface extends JpaRepository<Location, Long> {
    
    public List<Location> findByCity(String city, PageRequest pageRequest);

    public List<Location> findByParentCategory(String parentCategory, PageRequest pageRequest);

    public List<Location> findByCategory(String category, PageRequest pageRequest);

    public List<Location> findByCityAndParentCategoryAndCategory(String city, String parentCategory, String category, PageRequest pageRequest);

    public List<Location> findByCityAndParentCategory(String city, String parentCategory, PageRequest pageRequest);

    public List<Location> findByParentCategoryAndCategory(String parentCategory, String category, PageRequest pageRequest);

    public List<Location> findByCityAndCategory(String city, String category, PageRequest pageRequest);

}