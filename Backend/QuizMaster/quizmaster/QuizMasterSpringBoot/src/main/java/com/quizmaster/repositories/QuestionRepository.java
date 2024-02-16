package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
