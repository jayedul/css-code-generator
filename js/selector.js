var create_selector=	
{
	navigating_to_prop:function(already_exists)
	{
		/* -------------------get element list------------------- */
		el=$("#main_container").find("#declaration_in_config").children();
		
		/* now append an input field where user can write property name to navigate */
		already_exists!==true?$("#setting_title").append("<span id='go_to' title='Type first one or two letter'>Go To</span>").find("#go_to").append("<input type='text' name='navigate' placeholder='property name'/>"):temp=false;
		
		$("#setting_title").find("#go_to").find("input").get(0).oninput=function()
		{
			
			/* then search new name */
			for(i=0; i<el.length; i++)
			{
				/* if property name found for new name then scroll to that and highlight with background */
				if($(this).val()!=='' && el.eq(i).children().eq(0).html().toLowerCase().search($(this).val().toLowerCase())==0)
				{
					$("#config_container").scrollTop(0);
					
					ofst=el.eq(i).children().eq(0).offset().top;
					self=$("#config_container").offset().top;
					
					
					scroll_to=ofst-self;
					$("#config_container").scrollTop(scroll_to);
					
					$.fn.changeBackground(el.eq(i).children().eq(0).parent());
					break;
				}
			}
		}
		
	},
	
	selector_update:function()
	{
		if(!$("#main_container").find("#opt_cont").length)
		{
			$("#main_container").append("<br/><div id='opt_cont'></div><br/>").append("<div id='notf_cont'></div>").append("<div id='active_selector_name'></div><br/>");
		}
		if(create_selector.avail_selector().length>0)
		{
			/* ----set selectors in dropdown created by user---- */
			$("#opt_cont").html('<div id="action"></div>').find("#action").append("Select 'selector' and take action <select id='avail_selctor'></select>");
			
			var selector=create_selector.avail_selector();
			for(i=0; i<selector.length; i++)
			{
				$("#main_container").find("#avail_selctor").append("<option value='"+selector[i]+"'>"+selector[i]+"</option>");
			}
			
			/* -------and give option to delete or modify------- */
			$("#main_container").find("#action").append("<button id='modify_selector'>Modify</button>").append("<button id='delete_selector'>Delete</button>");
			
			/* ----------------------when click 'modify'---------------------- */
			$("#modify_selector").click
			(
				function()
				{
					create_selector.modify_selector($("#avail_selctor"));
					create_selector.selector_update();
					
					var inp=$("#main_container").find("#declaration_in_config").find("input, select");
					
					for(i=0;i<inp.length;i++)
					{
						inp.eq(i).prop('disabled', false);
					}
				}
			);
			
			/* ---------------------when click 'delete'--------------------- */
			$("#delete_selector").click
			(
				function()
				{
					create_selector.delete_selector($("#avail_selctor"));
					
					create_selector.selector_update();
					
					var inp=$("#main_container").find("#declaration_in_config").find("input, select, button");
					
					for(i=0;i<inp.length;i++)
					{
						inp.eq(i).prop('disabled', true);
					}
				}
			);
			
			$("#active_selector_name").html("<h3 class='text-info'> active selector : "+create_selector.active_selector.selector+"</h3>");
		}
		else
		{
			$("#opt_cont").html("<span class='bg-warning'>Not created any selector</span>");
			$("#active_selector_name").html("active selector : "+create_selector.active_selector.selector);
		}
	},
	

	/* there is a part in this script works perfectly but I can't understand how it works exactly */
	active_selector:false,
	
	/* 
		--------------------------------active_selector pattern--------------------------------
		----------------------Just a single object of particular selector----------------------
			active_selector:
			{
				selector:'selector name',
				property:
				[
					['width', '30px'],
					['height', '40px']
				]
			}
		--------------------------------active_selector pattern--------------------------------
	*/
	
	declaration:[],
	/* 
		----------------------------------declaration pattern----------------------------------
		------------------------an array of particular selector object------------------------
		declaration:
		[
			{
				selector:'selector name',
				property:
				[
					['width', '30px'],
					['height', '40px']
				]
			},
			
			{
				selector:'another selector name',
				property:
				[
					['color', 'blue'],
					['margin', '4px']
				]
			}
		];
		
		----------------------------------declaration pattern----------------------------------
	*/
	new_selector:function(button)
	{
		/* if value is not empty then do this */
		if(button.prev().val()!=='')
		{
			var s=create_selector.declaration;
			var created=false;
			
			/* loop through array of declarations object */
			for(i=0; i<s.length; i++)
			{
				/* here 'button.prev()' refers to the selector input field */
				/* check entered selector is exists or ot */
				if(s[i].selector==button.prev().val())
				{
					alert("'"+button.prev().val()+"' exists.");
					created=true;
					break;
				}
			}
			
			/* --------------if the selector already not created then create-------------- */
			/* remember all the selectors are particular object where selector property means selector name and property array means declarations */
			if(created==false && button.prev().val()!=='')
			{
				/* -----------Push the selector object in the declaration array----------- */
				s.push
				(
					{
						selector:button.prev().val(),
						property:[]
					}
				);
				
				/* find the index where new selector object has been stored. then make it active */
				for(i=0; i<s.length; i++)
				{
					if(s[i].selector==button.prev().val())
					{
						create_selector.active_selector=s[i];
						break;
					}
				}
				return true;
			}
			else
			{
				return false;
			}
		}
	},
	
	store:function(inp)
	{
		var as=create_selector.active_selector
		
		/* 'as==false' means there is no active selector to modify. this is a fatal error. */
		if(as==false && inp.data('value_type')!=='html_css')
		{
			alert('Something went wrong. Active selector not found.');
		}
		else
		{
			created=false;
			if(as!==false)
			{
				for(i=0; i<as.property.length; i++)
				{
					/* no need to create new property name if the name is already exists */
					if(as.property[i][0]==inp.attr('name'))
					{
						/* when the value is '' that means we have to delete the  property from selector */
						if(inp.val()=='')
						{
							as.property.splice(i,1);
						}
						/* otherwise modify existing property with new value */
						else
						{
							switch(inp.data('value_type'))
							{
								case 's'		:
								case 'px'		:
								case 'em'		:
								case '%'		: as.property[i][1]=inp.val()+inp.data('value_type');break;
								
								default			: as.property[i][1]=inp.val();
							}
						}
						
						created=true; /* this line indicates new property added */
						break;
					}
				}
			}
			
			/* otherwise no property found and create new one */
			if(created==false && inp.val()!=='')
			{
				switch(inp.data('value_type'))
				{
					case 's'		:
					case 'px'		:
					case 'em'		:
					case '%'		: as.property[as.property.length]=[inp.attr('name'), inp.val()+inp.data('value_type')];break;
					
					default			: as.property[as.property.length]=[inp.attr('name'), inp.val()];
				}
			}
		}
		
		/* live css store in style tag in header.  */
		create_selector.convert_to_css();
	},
	
	convert_to_css:function()
	{
		/* get the whole declaration array */
		var dcl=create_selector.declaration;
		var result='';
		
		/* 'dcl.length>0' means at least one declaration specified */
		if(dcl.length>0)
		{
			/* now convert the declaration into css (minified and formatted both)  */
			for(i=0; i<dcl.length; i++)
			{
				result=result+dcl[i].selector+"\n{";
				for(n=0; n<dcl[i].property.length; n++)
				{
					result=result+dcl[i].property[n][0]+":"+dcl[i].property[n][1]+";\n";
				}
				result=result+"}\n\n";
			}
			
			$("#live_css_code").find("pre").html(result);
		}
		else
		{
			$("#live_css_code").find("pre").empty();
			return false;
		}
	},
	
	avail_selector:function()
	{
		var dcl=create_selector.declaration;
		
		if(dcl.length>0)
		{
			var result=[];
			for(i=0; i<dcl.length; i++)
			{
				result.push(dcl[i].selector);
			}
			return result;
		}
		else
		{
			return 0;
		}
	},
	
	modify_selector:function(select_elem)
	{
		var s=create_selector.declaration;
		var activated=false;
		
		for(i=0; i<s.length; i++)
		{
			if(s[i].selector==select_elem.val())
			{
				create_selector.active_selector=s[i];
				activated=true;
				break;
			}
		}
		
		if(activated==false)
		{
			alert("Something went wrong");
		}
		else
		{
			select_elem.parent().parent().find('input, select').prop('disabled', false);
			$("#main_container").find("#more_background").prop('disabled', false);
		}
	},
	
	delete_selector:function(select_elem)
	{
		var s=create_selector.declaration;
		
		for(i=0; i<s.length; i++)
		{
			/* -------------if the selector name matched------------- */
			if(s[i].selector==select_elem.val())
			{
				s.splice(i,1);
				create_selector.active_selector=false;
				break;
			}
		}
		/* live css store in style tag in header.  */
		create_selector.convert_to_css();
	}
}
