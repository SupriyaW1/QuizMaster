package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Role;
import com.quizmaster.entities.Subject;
import com.quizmaster.repositories.SubjectRepositroy;

@Service
public class SubjectService {
	
	@Autowired
	SubjectRepositroy subrepo;
	
	public Subject getSubject(int subject_id)
	{
		return subrepo.findById(subject_id).get();
	}
	

}
