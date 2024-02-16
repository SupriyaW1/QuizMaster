package com.quizmaster.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "questions")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int qid;
	String question_text;
	String option1;
	String option2;
	String option3;
	String option4;
	int answer;
	String explaination;
	@OneToOne
	@JoinColumn(name = "subject_id")
	Subject subject_id;
	@OneToOne
	@JoinColumn(name = "cat_id")
	Catagory cat_id;

	public int getQid() {
		return qid;
	}

	public void setQid(int qid) {
		this.qid = qid;
	}

	public String getQuestion_text() {
		return question_text;
	}

	public void setQuestion_text(String question_text) {
		this.question_text = question_text;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public int getAnswer() {
		return answer;
	}

	public void setAnswer(int answer) {
		this.answer = answer;
	}

	public String getExplaination() {
		return explaination;
	}

	public void setExplaination(String explaination) {
		this.explaination = explaination;
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

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(String question_text, String option1, String option2, String option3, String option4, int answer,
			String explaination, Subject subject_id, Catagory cat_id) {
		super();
		this.question_text = question_text;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.answer = answer;
		this.explaination = explaination;
		this.subject_id = subject_id;
		this.cat_id = cat_id;
	}

	@Override
	public String toString() {
		return "Quetion [qid=" + qid + ", question_text=" + question_text + ", option1=" + option1 + ", option2="
				+ option2 + ", option3=" + option3 + ", option4=" + option4 + ", answer=" + answer + ", explaination="
				+ explaination + ", subject_id=" + subject_id + ", cat_id=" + cat_id + "]";
	}

}
