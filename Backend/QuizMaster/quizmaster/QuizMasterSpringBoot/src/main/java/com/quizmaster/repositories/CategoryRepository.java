package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Catagory;

@Repository
public interface CategoryRepository extends JpaRepository<Catagory, Integer> {

}
