package com.quizmaster.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="studentanswers")
public class AttemtQuiz {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    
	    
	    private Long answer_id;
	
	    public AttemtQuiz() {
		super();
	}
		public AttemtQuiz(Long answer_id, Long student_answer) {
		super();
		this.answer_id = answer_id;
		this.student_answer = student_answer;
	}
		Long student_answer;
	    @OneToOne
	 @JoinColumn(name="qid")
	    Question questions_qid;
	    @ManyToOne
	 @JoinColumn(name="sid")
	  Student sid;
	    @ManyToOne
	 @JoinColumn(name="cat_id")
	  Category cat_id;

		

			

		
}
