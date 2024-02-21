package com.quizmaster.entities;

public class ExamData {
	
	int sid;
	int cat_id;
	int subject_id;
	
	public ExamData() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public ExamData(int sid, int cat_id, int subject_id) {
		super();
		this.sid = sid;
		this.cat_id = cat_id;
		this.subject_id = subject_id;
	}

	


	


	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	public int getSubject_id() {
		return subject_id;
	}
	public void setSubject_id(int subject_id) {
		this.subject_id = subject_id;
	}



	@Override
	public String toString() {
		return "ExamData [sid=" + sid + ", cat_id=" + cat_id + ", subject_id=" + subject_id + "]";
	}
	
	
    
}
