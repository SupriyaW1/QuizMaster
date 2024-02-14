package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quizmaster.entities.Expert;

public interface ExpertRepository extends JpaRepository<Expert, Integer> {

}
