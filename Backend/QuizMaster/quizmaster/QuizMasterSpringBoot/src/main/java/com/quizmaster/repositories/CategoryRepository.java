package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    // Method to find a category by its ID
    // Spring Data JPA will automatically implement this method based on the method name
    // findBy + PropertyName (in PascalCase) + Id
    Category findById(int id);
}
