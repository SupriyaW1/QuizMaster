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

    
	public StudentAnswer() {
		super();
		// TODO Auto-generated constructor stub
	}


	public StudentAnswer(int student_answer, Exam exam_id, Question qid, Student sid) {
		super();
		this.student_answer = student_answer;
		this.exam_id = exam_id;
		this.qid = qid;
		this.sid = sid;
	}


	public int getAnswer_id() {
		return answer_id;
	}


	public void setAnswer_id(int answer_id) {
		this.answer_id = answer_id;
	}


	public int getStudent_answer() {
		return student_answer;
	}


	public void setStudent_answer(int student_answer) {
		this.student_answer = student_answer;
	}


	public Exam getExam_id() {
		return exam_id;
	}


	public void setExam_id(Exam exam_id) {
		this.exam_id = exam_id;
	}


	public Question getQid() {
		return qid;
	}


	public void setQid(Question qid) {
		this.qid = qid;
	}


	public Student getSid() {
		return sid;
	}


	public void setSid(Student sid) {
		this.sid = sid;
	}

    
	

}
