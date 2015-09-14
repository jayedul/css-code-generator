$(document).ready
(
	function()
	{
		$(window).bind('beforeunload', function(){return "All code will be vanished."});
		
		/* set elements in option tag in '#declarations' */
		get_list('clear', clear_list);
		get_list('cursor', cursor_list);
		
		get_list('align-content', align_content_list);
		get_list('-webkit-align-content', align_content_list);
		get_list('align-self', align_self_list);
		get_list('-webkit-align-self', align_self_list);
		
		get_list('align-items', align_items_list);
		get_list('-webkit-align-items', align_items_list);
		
		get_list('backface-visibility', backface_visibility_list);
		get_list('-webkit-backface-visibility', backface_visibility_list);
		
		get_list('border-image-repeat', border_image_repeat_list);
		
		get_list('animation-timing-function', transition_timing_function_list);
		get_list('-webkit-animation-timing-function', transition_timing_function_list);
		get_list('-moz-animation-timing-function', transition_timing_function_list);
		get_list('-o-animation-timing-function', transition_timing_function_list);
		
		get_list('animation-direction', animation_direction_list);
		get_list('-webkit-animation-direction', animation_direction_list);
		get_list('-moz-animation-direction', animation_direction_list);
		get_list('-o-animation-direction', animation_direction_list);
		
		get_list('animation-fill-mode', animation_fill_mode_list);
		get_list('-webkit-animation-fill-mode', animation_fill_mode_list);
		get_list('-moz-animation-fill-mode', animation_fill_mode_list);
		get_list('-o-animation-fill-mode', animation_fill_mode_list);
		
		get_list('animation-play-state', animation_play_state_list);
		get_list('-webkit-animation-play-state', animation_play_state_list);
		get_list('-moz-animation-play-state', animation_play_state_list);
		get_list('-o-animation-play-state', animation_play_state_list);
		
		get_list('background-position', background_position_list);
		get_list('background-repeat', background_repeat_list);
		get_list('background-size', background_size_list);
		get_list('background-attachment', background_attachment_list);
		get_list('background-clip', background_clip_list);
		get_list('background-origin', background_clip_list);
		
		get_list('border-style', border_style_list);
		get_list('border-left-style', border_style_list);
		get_list('border-right-style', border_style_list);
		get_list('border-top-style', border_style_list);
		get_list('border-bottom-style', border_style_list);
		get_list('border-collapse', border_collapse_list);
		
		get_list('box-sizing', box_sizing_list);
		get_list('-webkit-box-sizing', box_sizing_list);
		get_list('-moz-box-sizing', box_sizing_list);
		
		get_list('outline-style', border_style_list);
		
		get_list('caption-side', caption_side_list);
		get_list('column-rule-style', border_style_list);
		get_list('-webkit-column-rule-style', border_style_list);
		get_list('-moz-column-rule-style', border_style_list);
		get_list('column-span', column_span_list);
		get_list('-webkit-column-span', column_span_list);
		
		get_list('display', display_list);
		get_list('direction', direction_list);
		get_list('empty-cells', empty_cells_list);
		get_list('float', float_list);
		
		get_list('flex-basis', common_list);
		get_list('-webkit-flex-basis', common_list);
		get_list('-moz-flex-basis', common_list);
		
		get_list('flex-direction', flex_direction_list);
		get_list('-webkit-flex-direction', flex_direction_list);
		get_list('-moz-flex-direction', flex_direction_list);
		
		get_list('flex-flow', flex_flow_list);
		get_list('-webkit-flex-flow', flex_flow_list);
		get_list('-moz-flex-flow', flex_flow_list);
		
		get_list('flex-wrap', flex_wrap_list);
		get_list('-webkit-flex-wrap', flex_wrap_list);
		get_list('-moz-flex-wrap', flex_wrap_list);
		
		get_list('font-style', font_style_list);
		get_list('font-variant', font_variant_list);
		get_list('font-weight', font_weight_list);
		
		get_list('justify-content', justify_content_list);
		get_list('-webkit-justify-content', justify_content_list);
		get_list('-moz-justify-content', justify_content_list);
		
		get_list('list-style-type', list_style_type_list);
		get_list('list-style-position', list_style_position_list);
		
		get_list('opacity', opacity_list);
		
		get_list('overflow', overflow_list);
		get_list('overflow-x', overflow_list);
		get_list('overflow-y', overflow_list);
		
		get_list('page-break-after', page_break_list);
		get_list('page-break-before', page_break_list);
		get_list('page-break-inside', page_break_inside_list);
		
		get_list('position', position_list);
		get_list('resize', resize_list);
		get_list('table-layout', table_layout_list);
		
		get_list('text-align', text_align_list);
		get_list('text-align-last', text_align_last_list);
		get_list('-moz-text-align-last', text_align_last_list);
		get_list('text-decoration', text_decoration_list);
		get_list('text-overflow', text_overflow_list);
		get_list('text-transform', text_transform_list);
		
		get_list('transform-style', transform_style_list);
		get_list('-webkit-transform-style', transform_style_list);
		get_list('-moz-transform-style', transform_style_list);
		
		get_list('transition-timing-function', transition_timing_function_list);
		get_list('-webkit-transition-timing-function', transition_timing_function_list);
		get_list('-moz-transition-timing-function', transition_timing_function_list);
		
		get_list('unicode-bidi', unicode_bidi_list);
		
		get_list('user-select', user_select_list);
		get_list('-webkit-user-select', user_select_list);
		get_list('-moz-user-select', user_select_list);
		get_list('-ms-user-select', user_select_list);
		
		get_list('vertical-align', vertical_align_list);
		get_list('visibility', visibility_list);
		get_list('white-space', white_space_list);
		get_list('word-break', word_break_list);
		get_list('word-wrap', word_wrap_list);
		
		$("#main_container").html('<div>Valid selector including "#" or "."<input id="selector" type="text" name="selector" value=""/><button id="create_selector_button">Create</button></div>').find("#create_selector_button").click
		(
			function()
			{
				create_selector.new_selector($(this), 'css');
				create_selector.selector_update();
			}
		);
		
		create_selector.selector_update();
				
		/* ----------show declarations list to modify property---------- */
		
		var inp=$("#main_container").append("<div id='declaration_in_config'></div>").find("#declaration_in_config").append($("#declarations").html()).find("input, select, button");
		
		/* more background */
		$("#main_container").find("#more_background").click
		(
			function()
			{
				if(!$(this).data("already"))
				{
					more_background($(this), 'css');
					$(this).data("already", "something");
				}
			}
		);

		/* ----------------setting slide for extra field---------------- */
		$("#main_container").find(".toggle").click
		(
			function()
			{
				if($(this).parent().find(".extra").css('display')=='none')
				{
					$(this).css('color', 'white').parent().find(".extra").slideDown('fast');
				}
				else
				{
					$(this).css('color', 'gray').parent().find(".extra").slideUp('fast');
				}
			}
		);
		
		/* set real time configuration handler function */
		for(i=0;i<inp.length;i++)
		{
			/* set handler */
			if(inp.get(i).nodeName.toLowerCase()=='select')
			{
				inp.eq(i).prepend("<option value='' selected='selected'>Select</option>");
				inp.eq(i).append("<option value=''>Remove attr</option>");
				inp.eq(i).change
				(
					function()
					{
						create_selector.store($(this));
					}
				);
			}
			else
			{
				inp.get(i).oninput=function()
				{
					create_selector.store($(this));
				}
			}
			
			inp.eq(i).prop('disabled', true);
		}
		
		/* ---------------------set navigating to property--------------------- */
		create_selector.navigating_to_prop();
					
		/* -------------------Add highlight when click on an attr------------------- */
		$("#main_container").find("#declaration_in_config").children().click
		(
			function()
			{
				$(this).changeBackground();
			}
		);
		
		$("#go_to_top").click
		(
			function()
			{
				$("#config_container").animate({scrollTop:0});
			}
		);
	}
);
