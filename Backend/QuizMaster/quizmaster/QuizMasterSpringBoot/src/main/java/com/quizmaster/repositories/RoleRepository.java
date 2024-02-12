package com.quizmaster.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizmaster.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	
	

}
