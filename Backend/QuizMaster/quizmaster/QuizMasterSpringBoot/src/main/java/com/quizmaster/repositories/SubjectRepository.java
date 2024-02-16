package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {

}
