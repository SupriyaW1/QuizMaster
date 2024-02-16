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
@Table(name = "experts")
public class Expert {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int expert_id;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String qualification;
	@Column
	String subject;
	@Column
	String contact;
	@Column
	String email;
	@OneToOne
	@JoinColumn(name = "uid")
	User uid;

	public Expert() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Expert(String fname, String lname, String qualification, String subject, String contact, String email,
			User uid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.qualification = qualification;
		this.subject = subject;
		this.contact = contact;
		this.email = email;
		this.uid = uid;
	}

	public int getExpert_id() {
		return expert_id;
	}

	public void setExpert_id(int expert_id) {
		this.expert_id = expert_id;
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

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	User getUid() {
		return uid;
	}

	public void setUid(User uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "Expert [expert_id=" + expert_id + ", fname=" + fname + ", lname=" + lname + ", qualification="
				+ qualification + ", subject=" + subject + ", contact=" + contact + ", uid=" + uid + "]";
	}

}
