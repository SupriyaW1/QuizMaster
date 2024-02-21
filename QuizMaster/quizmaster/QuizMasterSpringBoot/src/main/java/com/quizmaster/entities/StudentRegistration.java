package com.quizmaster.entities;

import java.util.Date;

public class StudentRegistration {
	
	int sid;
	String uname;
	String pwd;
	String fname;
	String lname;
    Date bdate;
	String education;
	String contact;
	String email;
	int subscription;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public Date getBdate() {
		return bdate;
	}
	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getSubscription() {
		return subscription;
	}
	public void setSubscription(int subscription) {
		this.subscription = subscription;
	}
	@Override
	public String toString() {
		return "StudentRegistration [sid=" + sid + ", uname=" + uname + ", pwd=" + pwd + ", fname=" + fname + ", lname="
				+ lname + ", bdate=" + bdate + ", education=" + education + ", contact=" + contact + ", email=" + email
				+ ", subscription=" + subscription + "]";
	}
	
	

}
