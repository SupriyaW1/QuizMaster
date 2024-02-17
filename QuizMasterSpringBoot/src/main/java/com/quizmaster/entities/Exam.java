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
import javax.print.attribute.standard.DateTimeAtCompleted;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

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
	Category cat_id;

	public Exam() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Exam(Timestamp attempted_datetime, int marks, Student sid, Subject subject_id, Category cat_id) {
		super();
		this.attempted_datetime = attempted_datetime;
		this.marks = marks;
		this.sid = sid;
		this.subject_id = subject_id;
		this.cat_id = cat_id;
	}

	@Override
	public String toString() {
		return "Exam [exam_id=" + exam_id + ", attempted_datetime=" + attempted_datetime + ", marks=" + marks + ", sid="
				+ sid + ", subject_id=" + subject_id + ", cat_id=" + cat_id + "]";
	}
	
	
	
	
	

}
