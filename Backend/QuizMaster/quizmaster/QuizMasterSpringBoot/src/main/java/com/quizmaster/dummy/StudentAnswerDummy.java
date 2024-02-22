package com.quizmaster.dummy;

import java.util.List;

import com.quizmaster.entities.StudentAnswer;

public class StudentAnswerDummy {

	 List<StudentAnswer> answers;

	public List<StudentAnswer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<StudentAnswer> answers) {
		this.answers = answers;
	}

	public StudentAnswerDummy(List<StudentAnswer> answers) {
		super();
		this.answers = answers;
	}

	public StudentAnswerDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "StudentAnswerDummy [answers=" + answers + "]";
	}

}
