package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Subject;
import com.quizmaster.repositories.SubjectRepository;

@Service
public class SubjectService {

	@Autowired
	SubjectRepository subjectRepo;

	public Subject getSubject(int subject_id) {
		return subjectRepo.findById(subject_id).get();
	}

}
