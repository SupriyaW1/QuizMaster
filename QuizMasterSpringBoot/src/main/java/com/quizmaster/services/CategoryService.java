package com.quizmaster.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizmaster.entities.Category;
import com.quizmaster.entities.Role;
import com.quizmaster.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository catrepo;
	
//	public Category getCategory(int cat_id)
//	{
//		return catrepo.findById(cat_id).get();
//	}

	public Category getCategory(int cat_id) {
	
	Optional<Category> categoryOptional = catrepo.findById(cat_id);
	Category category =  null;
	if (categoryOptional.isPresent()) {
	    category = categoryOptional.get();
	    
	} else {
		System.out.println("Id not found");
	}
	return category;
	}

}
