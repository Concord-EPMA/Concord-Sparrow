# Schemas 
(db.load_data)

### [project](project.json)
- tags_tag               [ (tags schema) ](#tag)
- session                [ (session schema) ](#session)
- instrument_session     [ (instrument session schema) ](#instrument_session)
- publication            [ (publication schema) ](#publication)
- sample                 [ (sample schema) ](#sample)
- embargo_date            (Datetime)
- location_precision      (Integer)
- researcher             [ (researcher schema) ](#researcher)
- location_name           (String)
- name*                   (String)
- location_name_autoset   (Boolean)
- location                (Geometry)
- description             (String)


### [sample](sample.json)
- publication            [ (publication schema ) ](#publication)
- project                [ (project schema ) ](#project)
- uuid                    (UUID)
- material               [ (material schema ) ](#material) 
- elevation               (Decimal)
- igsn                    (String)
- tags_tag               [ (tags schema) ](#tag)
- location_name           (String)
- location                (Geometry)
- session                [ (session schema) ](#session)
- embargo_date            (DateTime)
- member_of              [ (sample schema) ](#sample)
- name                    (String)
- sample_geo_entity      [ (sample geo entity schema) ](#sample_geo_entity)
- location_precision      (Integer)
- location_name_autoset   (Boolean)
- depth                   (Decimal)


### [session](session.json)
- date_precision         (Related (could be integer))
- uuid                   (UUID)
- target                 (Related)
- instrument_session     [ (instrument session schema) ](#instrument_session)
- attribute		         [ (attribute schema) ](#attribute)
- technique              [ (method schema) ](#method)
- tags_tag               [ (tags schema) ](#tag)
- data 				   (JSON)
- date		           (DateTime)
- end_date	           (DateTime)
- embargo_date             (DateTime)
- sample                 [ (sample schema) ](#sample)
- instrument             [ (Instrument schema) ](#instrument)
- name*                    (String)
- publication            [ (publication schema) ](#publication)
- analysis               [ (analysis schema) ](#analysis)
- project                [ (project schema) ](#project)


### [analysis](analysis.json)
- tags_tag               [ (tags schema) ](#tag)
- data 				       (JSON)
- is_bad 			       (Boolean)
- analysis_type 		 [ (analysis_type schema ) ](#analysis_type) 
- session*                 (Related)
- session_index 		   (Integer)
- constant	 		     [ (constant schema ) ](#constant)
- is_standard 		       (Boolean)
- datum			         [ (datum schema ) ](#datum) 
- date		             (DateTime)
- material               [ (material schema ) ](#material) 
- is_accepted 		       (Boolean)
- analysis_name            (String)
- attribute              [ (attribute schema) ](#attribute)
- standard_sample		   (Related)
- is_interpreted 	       (Boolean)


### [datum](datum.json)
- tags_tag               [ (tags schema) ](#tag)
- Is_bad				 (Boolean)
- is_accepted 		     (Boolean)
- analysis*		         (Related)
- value* 			     (Decimal)
- error 			     (Decimal)
- type 			       [ (datum type schema ) ](#datum_type)


### [data_file](data_file.json)
- file_hash              (UUID)
- type				     (Related)
- data_file_link  	     [ (data file link schema ) ](#data_file_link)
- source_url 			 (String )
- file_mtime 			 (DateTime)
- basename 			     (String)
- file_path 			 (String)


### [sample_geo_entity](sample_geo_entity.json)
- sample*  			   [ (sample schema) ](#sample)
- geo_entity*	 	   [ (geo_entity schema) ](#geo_entity)
- ref_unit	  		   [ (unit schema ) ](#unit)
- ref_distance		   (Decimal)
- ref_datum	 		   [ (entity reference schema ) ](#entity_reference)


### [geo_entity](geo_entity.json)
- description 		    (String)
- sample_geo_entity  	[ (sample geo_entity schema ) ](#sample_geo_entity) 
- type	 			   [ (entity_type schema ) ](#entity_type)
- material	 		   [ (material schema ) ](#material) 
- part_of	 		    [ (geo_entity schema ) ](#geo_entity) 
- name*	 			      (String)
- authority 			  (String)
- ref_url			      (String)


### [material](material.json)
- type_of	 		       [ (material schema ) ](#material) 
- id*	 			       (String)
- authority 			   (String)
- description			   (String)


### [instrument](instrument.json)
- description		   (String)
- name*	 			   (String)


### [method](method.json)
- description		   (String)
- authority			   (String)
- id*	 			   (String)


### [researcher](researcher.json)
- name*	 			   (String)
- orcid				   (String)


### [publication](publication.json)
- doi				   (String)
- author		 	   (String)
- data	 			   (JSON)
- title				   (String)
- link				   (String)
- journal	 		   (String)
- year	 			   (String)


### [tag](tag.json)
- color				   (String)
- name				   (String)
- description		   (String)


### [attribute](attribute.json)
- doi*				   (String)
- parameter*			[ (parameter schema ) ](#parameter)


### [authority](authority.json)
- value*				   (String)
- parameter*			[ (parameter schema ) ](#parameter)


### [datum_type](datum_type.json)
- description			   (String)
- is_computed			   (Boolean)
- error_unit			   [ (unit schema) ](#unit)
- unit				   [ (unit schema) ](#unit)
- error_metric		   [ (error_metric schema) ](#error_metric)
- is_interpreted		   (Boolean)
- parameter*			[ (parameter schema ) ](#parameter)


### [unit](unit.json)
- description			   (String)
- authority			       (String)
- id*				       (String)


### [error_metric](error_metric.json)
- description		    (String)
- authority			    (String)
- id*				    (String)

### [instrument_session](instrument_session.json)
- data		        (JSON)
- session           [ (session schema) ](#project)
- researcher        [ (researcher schema) ](#researcher)
- instrument        (Related)
- project           [ (project schema) ](#project)
- name			    (String)
- start_date        (DateTime)
- end_date          (DateTime)


### [analysis_type](analysis_type.json)
- type_of           [ (analysis_type schema) ](#analysis_type)
- authority			(String)
- id*			    (String)
- description		(String)

### [constant](constant.json)
- value*			(Decimal)
- error		        (Decimal)
- description		(String)
- type*			    (Related)

### [data_file_link](data_file_link.json)
- session           [ (session schema) ](#project)
- sample            [ (sample schema) ](#sample)
- date*             (DateTime)
- instrument_session [ (instrument_session schema) ](#instrument_session)
- analysis           [ (analysis schema) ](#analysis)
- error			    (String)
- data_file*        (Related)

### [entity_type](entity_type.json)
- type_of  		[ (entity_type schema) ](#entity_type)
- id*			    (String)
- authority         (String)
- description		(String)
 

### [parameter](parameter.json)
- description		(String)
- authority         (String)
- id*			    (String)

### [entity_reference](entity_reference.json)
- description		(String)
- authority         (String)
- id*			    (String)