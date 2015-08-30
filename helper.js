function get_list(name, config_list)
{
	var element=$("select[name='"+name+"']").eq(0);
	
	for(i=0; i<config_list.length; i++)
	{
		element.append("<option value='"+config_list[i]+"'>"+config_list[i]+"</option>");
	}
}

function more_background(btn, for_css)
{
	btn.click
	(
		function()
		{
			lng=$(this).parent().find("[name~='background']").length;
			spc="";
			for(i=0; i<lng; i++)
			{
				spc+=" ";
			}
			new_filed=$("<br/><input type='text' name='"+spc+"background' placeholder='shorthand'/>");
			$(this).before(new_filed);
			if(for_css=='css')
			{
				$(new_filed).get(1).oninput=function()
				{
					create_selector.store($(this));
				}
			}
			else
			{
				$(new_filed).get(1).oninput=function()
				{
					el_object.config_handler($(this));
				}
			}
		}
	);
}
var methods=['parent', 'children', 'prev', 'prevAll', 'next', 'nextAll', 'siblings', 'first', 'last', 'first-child', 'last-child', 'parentsUntil("body")'].sort();

var clear_list=["none", "left", "right", "both", "initial", "inherit"];

var cursor_list=["alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize", "no-drop", "none", "not-allowed", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "URL", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out", "initial", "inherit"];

var display_list=["inline", "block", "flex", "inline-block", "inline-flex", "inline-table", "list-item", "run-in", "table", "table-caption", "table-column-group", "table-header-group", "table-footer-group", "table-row-group", "table-cell", "table-column", "table-row", "none", "initial", "inherit"];

var direction_list=["ltr", "rtl", "initial", "inherit"];

var transition_timing_function_list=["ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier(0.47, 0, 0.74, 0.71)", "cubic-bezier(0.55, 0.09, 0.68, 0.53)", "cubic-bezier(0.55, 0.09, 0.68, 0.53)", "cubic-bezier(0.9, 0.03, 0.69, 0.22)", "cubic-bezier(0.76, 0.05, 0.86, 0.06)", "cubic-bezier(0.76, 0.05, 0.86, 0.06)", "cubic-bezier(0.95, 0.05, 0.8, 0.04)", "cubic-bezier(0.6, 0.04, 0.98, 0.34)", "cubic-bezier(0.6, -0.28, 0.74, 0.05)", "cubic-bezier(0.39, 0.58, 0.57, 1)", "cubic-bezier(0.25, 0.46, 0.45, 0.94)", "cubic-bezier(0.22, 0.61, 0.36, 1)", "cubic-bezier(0.17, 0.84, 0.44, 1)", "cubic-bezier(0.23, 1, 0.32, 1)", "cubic-bezier(0.23, 1, 0.32, 1)", "cubic-bezier(0.19, 1, 0.22, 1)", "cubic-bezier(0.08, 0.82, 0.17, 1)", "cubic-bezier(0.18, 0.89, 0.32, 1.28)", "cubic-bezier(0.45, 0.05, 0.55, 0.95)", "cubic-bezier(0.46, 0.03, 0.52, 0.96)", "cubic-bezier(0.65, 0.05, 0.36, 1)", "cubic-bezier(0.77, 0, 0.18, 1)", "cubic-bezier(0.86, 0, 0.07, 1)", "cubic-bezier(1, 0, 0, 1)", "cubic-bezier(0.79, 0.14, 0.15, 0.86)", "cubic-bezier(0.68, -0.55, 0.27, 1.55)",  "cubic-bezier(1, 0, 0, 1)", "initial", "inherit"];

var opacity_list=[".1", ".2", ".3", ".4", ".5", ".6", ".7", ".8", ".9", "1", "initial", "inherit"];

var overflow_list=["visible", "hidden", "scroll", "auto", "initial", "inherit"];

var float_list=["none", "left", "right", "initial", "inherit"];

var font_style_list=["normal", "italic", "oblique", "initial", "inherit"];

var font_variant_list=["normal", "small-caps", "initial", "inherit"];

var font_weight_list=["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900", "initial", "inherit"];

var justify_content_list=["flex-start", "flex-end", "center", "space-between", "space-around", "initial", "inherit"];

var position_list=["absolute", "fixed", "relative", "static", "initial", "inherit"];

var caption_side_list=["top", "bottom", "initial", "inherit"];

var align_content_list=["stretch", "center", "flex-start", "flex-end", "space-between", "space-around", "initial", "inherit"];
var align_self_list=["auto", "stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"];
var align_items_list=["stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"];

var background_position_list=["left top", "left center", "left bottom", "right top", "right center", "right bottom", "center top", "center center", "center bottom", "custom"];
var background_repeat_list=["repeat", "repeat-x", "repeat-y", "no-repeat", "initial", "inherit"];
var background_size_list=["auto", "cover", "contain", "initial", "inherit", "custom"];
var background_attachment_list=["scroll", "fixed", "local", "initial", "inherit"];
var background_clip_list=["border-box", "padding-box", "content-box", "initial", "inherit"];

var common_list=["auto", "initial", "inherit"];
var flex_direction_list=["row", "row-reverse", "column", "column-reverse", "initial", "inherit"];
var flex_flow_list=["row nowrap", "row-reverse nowrap", "column nowrap", "column-reverse nowrap", "row wrap", "row-reverse wrap", "column wrap", "column-reverse wrap", "row wrap-reverse", "row-reverse wrap-reverse", "column wrap-reverse", "column-reverse wrap-reverse", "initial"];
var flex_wrap_list=["nowrap", "wrap", "wrap-reverse", "initial", "inherit"];

var empty_cells_list=["show", "hide", "initial", "inherit"];

var border_image_repeat_list=["stretch", "repeat", "round", "space", "initial", "inherit"];

var border_collapse_list=["separate", "collapse", "initial", "inherit"];

var backface_visibility_list=["visible", "hidden", "initial", "inherit"];

var list_style_type_list=["disc", "armenian", "circle", "cjk-ideographic", "decimal", "decimal-leading-zero", "georgian", "hebrew", "hiragana", "hiragana-iroha", "katakana", "katakana-iroha", "lower-alpha", "lower-greek", "lower-latin", "lower-roman", "none", "square", "upper-alpha", "upper-latin", "upper-roman", "initial", "inherit"];

var border_style_list=["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"];

var box_sizing_list=["content-box", "border-box", "initial", "inherit"];

var column_span_list=["1", "all", "initial", "inherit"];

var page_break_list=["auto", "always", "avoid", "left", "right", "initial", "inherit"];
var page_break_inside_list=["auto", "avoid", "initial", "inherit"];

var table_layout_list=["auto", "fixed", "initial", "inherit"];

var text_align_list=["left", "right", "center", "justify", "initial", "inherit"];

var text_align_last_list=["auto", "left", "right", "center", "justify", "start", "end", "initial", "inherit"];

var text_transform_list=["none", "capitalize", "uppercase", "lowercase", "initial", "inherit"];

var text_overflow_list=["clip", "ellipsis", "initial", "inherit"];

var text_decoration_list=["none", "underline", "overline", "line-through", "initial", "inherit"];

var user_select_list=["none", "text", "all", "element"];

var animation_direction_list=["normal", "reverse", "alternate", "alternate-reverse", "initial", "inherit"];

var animation_fill_mode_list=["none", "forwards", "backwards", "both", "initial", "inherit"];

var animation_play_state_list=["paused", "running", "initial", "inherit"];

var resize_list=["none", "both", "horizontal", "vertical", "initial", "inherit"];

var visibility_list=["visible", "hidden", "collapse", "initial", "inherit"];

var white_space_list=["normal", "nowrap", "pre", "pre-line", "pre-wrap", "initial", "inherit"];

var list_style_position_list=["inside", "outside", "initial", "inherit"];

var word_break_list=["normal", "break-all", "keep-all ", "initial", "inherit"];

var word_wrap_list=["normal", "break-word", "initial", "inherit"];

var vertical_align_list=["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom", "initial", "inherit"];

var unicode_bidi_list=["normal", "embed", "bidi-override", "initial", "inherit"];

var transform_style_list=["flat", "preserve-3d", "initial", "inherit"];
