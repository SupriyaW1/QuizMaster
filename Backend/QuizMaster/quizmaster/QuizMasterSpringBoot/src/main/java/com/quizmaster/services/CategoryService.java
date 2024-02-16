package com.quizmaster.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Catagory;
import com.quizmaster.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository catRepo;

	public Catagory getCategory(int cat_id) {
		return catRepo.findById(cat_id).get();
	}

}
