package com.quizmaster.entities;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;
@Component
@Entity
@Table(name = "exams")
public class Exams {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int exam_id;
	int marks=0;
	@Column(name = "attempted_datetime")
    @Temporal(TemporalType.TIMESTAMP)
    private Date attemptedDateTime;
	
	@ManyToOne
    @JoinColumn(name = "subject_id")
     Subject subject_id;

    @ManyToOne
    @JoinColumn(name = "category_id")
     Category category_id;
    @OneToOne
    @JoinColumn(name="sid")
    Student student;
    @ManyToOne
    @JoinColumn(name = "cat_id")
    Category category;
    
	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Exams() {
		super();
	}

	
	 public Date getAttemptedDateTime() {
	        return attemptedDateTime;
	    }

	    public void setAttemptedDateTime(Date attemptedDateTime) {
	        this.attemptedDateTime = attemptedDateTime;
	    }


		public int getExam_id() {
			return exam_id;
		}


		public void setExam_id(int exam_id) {
			this.exam_id = exam_id;
		}


		public int getMarks() {
			return marks;
		}


		public void setMarks(int marks) {
			this.marks = marks;
		}


		public Subject getSubject_id() {
			return subject_id;
		}


		public void setSubject_id(Subject subject_id) {
			this.subject_id = subject_id;
		}


		public Category getCategory_id() {
			return category_id;
		}


		public void setCategory_id(Category category_id) {
			this.category_id = category_id;
		}


		public Student getStudent() {
			return student;
		}


		public void setStudent(Student student) {
			this.student = student;
		}


		public Exams(int exam_id, int marks, Date attemptedDateTime, Subject subject_id, Category category_id,
				Student student, Category category) {
			super();
			this.exam_id = exam_id;
			this.marks = marks;
			this.attemptedDateTime = attemptedDateTime;
			this.subject_id = subject_id;
			this.category_id = category_id;
			this.student = student;
			this.category = category;
		}


		@Override
		public String toString() {
			return "Exams [exam_id=" + exam_id + ", marks=" + marks + ", attemptedDateTime=" + attemptedDateTime
					+ ", subject_id=" + subject_id + ", category_id=" + category_id + ", student=" + student
					+ ", category=" + category + "]";
		}



		


		

		
		
}





	
	
	