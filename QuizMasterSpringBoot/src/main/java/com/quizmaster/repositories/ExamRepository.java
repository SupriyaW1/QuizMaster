package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Exam;

@Repository
public interface ExamRepository extends JpaRepository<Exam, Integer> {

}
