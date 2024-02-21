package com.quizmaster.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.quizmaster.entities.Expert;
import com.quizmaster.repositories.ExpertRepository;

@Service
public class ExpertService {
	
	@Autowired
	ExpertRepository erepo;
	
	public Expert saveExpert(Expert expert)
	{
		return erepo.save(expert);
	}

}