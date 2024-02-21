package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.StudentAnswer;

@Repository
public interface StudentAnswerRepository extends JpaRepository<StudentAnswer, Integer> {

}