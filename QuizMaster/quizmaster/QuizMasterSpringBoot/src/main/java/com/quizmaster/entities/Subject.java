package com.quizmaster.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "subjects")
public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int subject_id;
	String subject_name;
	String description;
	
	public Subject() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Subject(String subject_name, String description) {
		super();
		this.subject_name = subject_name;
		this.description = description;
	}

    

	public int getSubject_id() {
		return subject_id;
	}


	public void setSubject_id(int subject_id) {
		this.subject_id = subject_id;
	}


	public String getSubject_name() {
		return subject_name;
	}


	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return "Subject [subject_id=" + subject_id + ", subject_name=" + subject_name + ", description=" + description
				+ "]";
	}
  
//    @OneToOne
//	@JoinColumn(name = "expert_id")
//	Expert expert_id;
  
}
