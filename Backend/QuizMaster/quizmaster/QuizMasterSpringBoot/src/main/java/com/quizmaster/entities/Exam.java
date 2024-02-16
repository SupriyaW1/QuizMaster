package com.quizmaster.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name = "exams")
public class Exam {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int exam_id;
	Timestamp attempted_datetime;
	int marks;
	@ManyToOne
	@JoinColumn(name = "sid")
	Student sid;
	@OneToOne
	@JoinColumn(name = "subject_id")
	Subject subject_id;
	@OneToOne
	@JoinColumn(name = "cat_id")
	Catagory cat_id;

	public int getExam_id() {
		return exam_id;
	}

	public void setExam_id(int exam_id) {
		this.exam_id = exam_id;
	}

	public Timestamp getAttempted_datetime() {
		return attempted_datetime;
	}

	public void setAttempted_datetime(Timestamp attempted_datetime) {
		this.attempted_datetime = attempted_datetime;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public Student getSid() {
		return sid;
	}

	public void setSid(Student sid) {
		this.sid = sid;
	}

	public Subject getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(Subject subject_id) {
		this.subject_id = subject_id;
	}

	public Catagory getCat_id() {
		return cat_id;
	}

	public void setCat_id(Catagory cat_id) {
		this.cat_id = cat_id;
	}

	public Exam() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Exam(Timestamp attempted_datetime, int marks, Student sid, Subject subject_id, Catagory cat_id) {
		super();
		this.attempted_datetime = attempted_datetime;
		this.marks = marks;
		this.sid = sid;
		this.subject_id = subject_id;
		this.cat_id = cat_id;
	}

}
