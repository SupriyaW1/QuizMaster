package com.quizmaster.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quizmaster.entities.Expert;
import com.quizmaster.services.AdminService;

@RestController
public class AdminController {

	@Autowired
	AdminService aService;

	@GetMapping("getAllExpert")
	public List<Expert> getAllExperts() {
		List<Map<String, Object>> expertList = new ArrayList<>();
		List<Expert> experts = aService.getAllExperts();
        for(Expert expert:experts)
        {
        	 Map<String, Object> map = new HashMap<>();
 	        map.put("Exper ID", expert.getExpert_id());
 	       // map.put(null, experts)
        }
		return aService.getAllExperts();
	}
}
