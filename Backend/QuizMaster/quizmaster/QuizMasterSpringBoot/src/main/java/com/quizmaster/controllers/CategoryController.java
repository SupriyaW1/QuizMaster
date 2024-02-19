package com.quizmaster.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.Category;
import com.quizmaster.services.CategoryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoryController {
	@Autowired
	CategoryService catService;

	@GetMapping("allCategories")
	public List<Category> allCategories() {
		return catService.allCategories();
	}
}
