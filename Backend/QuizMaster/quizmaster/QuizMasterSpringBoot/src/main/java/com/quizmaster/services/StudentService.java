package com.quizmaster.services;

import org.springframework.stereotype.Service;

import com.quizmaster.entities.Student;
import com.quizmaster.repositories.StudentRepository;


@Service
public class StudentService {
   StudentRepository srepo;
	public Student saveStudent(Student student) {
		return srepo.save(student);
	}

}
