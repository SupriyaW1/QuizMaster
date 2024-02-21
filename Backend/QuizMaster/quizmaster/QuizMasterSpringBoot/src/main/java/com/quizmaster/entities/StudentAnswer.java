package com.quizmaster.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="studentanswers")
public class StudentAnswer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int answer_id;
	int student_answer ;
	
	
	
	
	@ManyToOne
    @JoinColumn(name="exam_id")
    Exams exam;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name="sid")
    Student student;

    @ManyToOne
    @JoinColumn(name="cat_id")
    Category category;
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
	public Exams getExam() {
		return exam;
	}
	public void setExam(Exams exam) {
		this.exam = exam;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public StudentAnswer(int answer_id, int student_answer, Exams exam, Question question, Student student,
			Category category) {
		super();
		this.answer_id = answer_id;
		this.student_answer = student_answer;
		this.exam = exam;
		this.question = question;
		this.student = student;
		this.category = category;
	}
	@Override
	public String toString() {
		return "StudentAnswer [answer_id=" + answer_id + ", student_answer=" + student_answer + ", exam=" + exam
				+ ", question=" + question + ", student=" + student + ", category=" + category + "]";
	}
	

}
