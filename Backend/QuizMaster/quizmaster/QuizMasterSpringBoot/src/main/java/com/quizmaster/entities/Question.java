package com.quizmaster.entities;

import javax.persistence.Column;
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
	@Column
	String question_text;
	@Column
	String option1;
	@Column
	String option2;
	@Column
	String option3;
	@Column
	String option4;
	@Column
	int answer;
	@Column
	String explanation;
	

	    @OneToOne
	    @JoinColumn(name = "subject_id")
	    Subject subject;

	    @OneToOne
	    @JoinColumn(name = "cat_id")
	    Category category;

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
		return explanation;
	}

	public void setExplaination(String explaination) {
		this.explanation = explaination;
	}

	

	

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Question [qid=" + qid + ", question_text=" + question_text + ", option1=" + option1 + ", option2="
				+ option2 + ", option3=" + option3 + ", option4=" + option4 + ", answer=" + answer + ", explanation="
				+ explanation + ", subject=" + subject + ", category=" + category + "]";
	}

	public String getExplanation() {
		return explanation;
	}

	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Question(int qid, String question_text, String option1, String option2, String option3, String option4,
			int answer, String explanation, Subject subject, Category category) {
		super();
		this.qid = qid;
		this.question_text = question_text;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.answer = answer;
		this.explanation = explanation;
		this.subject = subject;
		this.category = category;
	}

	


	

}
