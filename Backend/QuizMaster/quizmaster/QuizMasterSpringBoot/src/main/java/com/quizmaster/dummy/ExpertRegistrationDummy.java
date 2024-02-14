package com.quizmaster.dummy;

public class ExpertRegistrationDummy {
	String fname;
	String lname;
	String subject;
	String qualification;
	String email;
	String contact;
	String pwd;
	String uname;
	int uid;

	public ExpertRegistrationDummy() {
		super();
	}

	public ExpertRegistrationDummy(String fname, String lname, String subject, String qualification, String email,
			String contact, String pwd, String uname, int uid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.subject = subject;
		this.qualification = qualification;
		this.email = email;
		this.contact = contact;
		this.pwd = pwd;
		this.uname = uname;
		this.uid = uid;
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

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "ExpertRegistrationDummy [fname=" + fname + ", lname=" + lname + ", subject=" + subject
				+ ", qualification=" + qualification + ", email=" + email + ", contact=" + contact + ", pwd=" + pwd
				+ ", uname=" + uname + ", uid=" + uid + "]";
	}
   
}
