package com.quizmaster.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Exam;

@Transactional
@Repository
public interface ExamRepository extends JpaRepository<Exam, Integer> {

}
