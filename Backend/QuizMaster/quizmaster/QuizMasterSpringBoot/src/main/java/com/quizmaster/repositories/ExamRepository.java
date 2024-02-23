package com.quizmaster.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Exam;

@Transactional
@Repository
public interface ExamRepository extends JpaRepository<Exam, Integer> {

	@Modifying
	@Query(value="update exams set marks = :result where exam_id = :examid",nativeQuery = true)
	public int updateResult(int examid, int result);
}
