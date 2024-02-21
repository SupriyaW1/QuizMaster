package com.quizmaster.entities;

public class AddStudentAnswer {
	
	int student_answer;
	int exam_id;
	int qid;
	int sid;
	
	public AddStudentAnswer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AddStudentAnswer(int student_answer, int exam_id, int qid, int sid) {
		super();
		this.student_answer = student_answer;
		this.exam_id = exam_id;
		this.qid = qid;
		this.sid = sid;
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
		return "AddStudentAnswer [student_answer=" + student_answer + ", exam_id=" + exam_id + ", qid=" + qid + ", sid="
				+ sid + "]";
	}
	
   
	
}
