# Schemas 
(db.load_data)

### [project](project.json)
- tags_tag               [ (tags schema) ](#tag)
- session                - session schema)
- instrument_session     - instrument session schema)
- publication            - publication schema )
- sample                 - sample schema)
- embargo_date            (Datetime)
- location_precision      (Integer)
- researcher             - researcher schema)
- location_name           (String)
- name*                   (String)
- location_name_autoset   (Boolean)
- location                (Geometry)
- description             (String)


### [sample](sample.json)
- publication            - publication schema )
- project                - project schema )
- uuid                    (UUID)
- material               - material schema )
- elevation               (Decimal)
- igsn                    (String)
- tags_tag               - tags schema)
- location_name           (String)
- location                (Geometry)
- session                - session schema)
- embargo_date            (DateTime)
- member_of              - sample schema)
- name                    (String)
- sample_geo_entity      - sample geo entity schema)
- location_precision      (Integer)
- location_name_autoset   (Boolean)
- depth                   (Decimal)


### [session](session.json)
- date_precision         (Related (could be integer))
- uuid                   (UUID)
- target                 (Related)
- instrument_session     - instrument schema)
- attribute		       - attribute schema)
- technique              - method schema)
- tags_tag               - tags schema)
- data 				   (JSON)
- date		           (DateTime)
- end_date	           (DateTime)
- embargo_date             (DateTime)
- sample                 - sample schema)
- instrument             - instrument schema)
- name*                    (String)
- publication            - publication schema )
- analysis               - analysis schema)
- project                - project schema)


### [analysis](analysis.json)
- tags_tag               - tags schema)
- data 				       (JSON)
- is_bad 			       (Boolean)
- analysis_type 		   - analysis type schema)
- session*                 (Related)
- session_index 		   (Integer)
- constant	 		   - constant schema)
- is_standard 		       (Boolean)
- datum			       - datum schema)
- date		           -   (DateTime)
- material               - material schema )
- is_accepted 		       (Boolean)
- analysis_name            (String)
- attribute              - attribute schema )
- standard_sample		   (Related)
- is_interpreted 	       (Boolean)


### [datum](datum.json)
- tags_tag               - tags schema)
- Is_bad				 (Boolean)
- is_accepted 		     (Boolean)
- analysis*		         (Related)
- value* 			     (Decimal)
- error 			     (Decimal)
- type 			       - Datum Type Schema)


### [data_file](data_file.json)
- file_hash              (UUID)
- type				     (Related)
- data_file_link  	   - DataFileLink Schema)
- source_url 			 (String )
- file_mtime 			 (DateTime)
- basename 			   - (String)
- file_path 			 (String)


### [sample_geo_entity](sample_geo_entity.json)
- sample  			   - Sample Schema)
- geo_entity	 		   - Geo Entity Schema)
- ref_unit	  		   - Unit Schema)
- ref_distance		    (Decimal)
- ref_datum	 		   - entity reference Schema)


### [geo_entity](geo_entity.json)
- description 		   -  (String)
- sample_geo_entity  	   - Sample Geo Entity Schema)
- type	 			   - Entity type Schema)
- material	 		   - material Schema)
- part_of	 		       - Geo Entity Schema)
- name*	 			      (String)
- authority 			  (String)
- ref_url			      (String)


### [material](material.json)
- type_of	 		       - material Schema)
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
- doi*				   - (String)
- parameter*			   - Parameter Schema )


### [authority](authority.json)
- value*				   (String)
- parameter*			   - Parameter Schema )


### [datum_type](datum_type.json)
- description			   (String)
- is_computed			   (Boolean)
- error_unit			   - unit Schema )
- unit				   - unit Schema )
- error_metric		   - error metric Schema )
- is_interpreted		   (Boolean)
- parameter*			   - Parameter Schema )


### [unit](unit.json)
- description			   (String)
- authority			       (String)
- id*				       (String)


### [error_metric](error_metric.json)
- description		    (String)
- authority			    (String)
- id*				    (String)



