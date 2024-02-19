package com.quizmaster.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "studentanswers")
public class StudentAnswer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int answer_id;
	@Column
	int student_answer;
	@Column
	int exam_id;
	@Column
	int qid;
	@Column
	int sid;

	public StudentAnswer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentAnswer(int student_answer, int exam_id, int qid, int sid) {
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

	public int getExam_id() {
		return exam_id;
	}

	public void setExam_id(int exam_id) {
		this.exam_id = exam_id;
	}

	public int getQid() {
		return qid;
	}

	public void setQid(int qid) {
		this.qid = qid;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	@Override
	public String toString() {
		return "StudentAnswer [answer_id=" + answer_id + ", student_answer=" + student_answer + ", exam_id=" + exam_id
				+ ", qid=" + qid + ", sid=" + sid + "]";
	}

}
