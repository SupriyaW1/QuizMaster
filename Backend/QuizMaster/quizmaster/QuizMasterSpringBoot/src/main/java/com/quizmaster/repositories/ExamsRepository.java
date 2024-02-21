package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Exams;
import com.quizmaster.entities.Expert;

@Repository
public interface ExamsRepository extends JpaRepository<Exams, Integer> { 

}
