package com.quizmaster.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "studentanswers")
@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class StudentAnswer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int answer_id;
	int student_answer;
	
	@OneToOne
	@JoinColumn(name = "exam_id")
	Exam exam_id;
	
	
	@OneToOne
	@JoinColumn(name = "qid")
	Question qid;
	
	
	@OneToOne
	@JoinColumn(name = "sid")
	Student sid;
	

}
