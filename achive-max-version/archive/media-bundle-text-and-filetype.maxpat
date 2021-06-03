{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 1,
			"revision" : 4,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 244.0, 619.0, 1238.0, 793.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 320.0, 276.0, 150.0, 20.0 ],
					"text" : "json file store thing"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-25",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 578.5, 578.0, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-22",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 578.5, 613.0, 47.0, 23.0 ],
					"text" : "fontlist"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-82",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 642.5, 670.0, 64.0, 23.0 ],
					"text" : "tosymbol"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-83",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 563.5, 697.0, 98.0, 23.0 ],
					"text" : "pak font Times"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-84",
					"items" : [ "Ableton Sans Light", ",", "Ableton Sans Medium", ",", "Ableton Sans Bold", ",", "Adobe Devanagari", ",", "Adobe Devanagari Italic", ",", "Adobe Devanagari Bold", ",", "Adobe Devanagari Bold Italic", ",", "Agency FB", ",", "Agency FB Bold", ",", "Algerian", ",", "Arial", ",", "Arial Narrow", ",", "Arial Italic", ",", "Arial Narrow Italic", ",", "Arial Bold", ",", "Arial Narrow Bold", ",", "Arial Bold Italic", ",", "Arial Narrow Bold Italic", ",", "Arial Black", ",", "Arial Rounded MT Bold", ",", "Atlanta Book", ",", "Atlanta Book Oblique", ",", "Atlanta Demi", ",", "Atlanta Demi Oblique", ",", "Bahnschrift Light", ",", "Bahnschrift Light Condensed", ",", "Bahnschrift Light SemiCondensed", ",", "Bahnschrift SemiLight", ",", "Bahnschrift SemiLight Condensed", ",", "Bahnschrift SemiLight SemiCondensed", ",", "Bahnschrift", ",", "Bahnschrift Condensed", ",", "Bahnschrift SemiCondensed", ",", "Bahnschrift SemiBold", ",", "Bahnschrift SemiBold Condensed", ",", "Bahnschrift SemiBold SemiCondensed", ",", "Bahnschrift Bold", ",", "Bahnschrift Bold Condensed", ",", "Bahnschrift Bold SemiCondensed", ",", "Baskerville Old Face", ",", "Bauhaus 93", ",", "Belgium", ",", "Bell MT", ",", "Bell MT Italic", ",", "Bell MT Bold", ",", "Berlin Sans FB", ",", "Berlin Sans FB Demi Bold", ",", "Berlin Sans FB Bold", ",", "Bermuda Script", ",", "Bernard MT Condensed", ",", "Blackadder ITC", ",", "Bodoni MT", ",", "Bodoni MT Condensed", ",", "Bodoni MT Italic", ",", "Bodoni MT Condensed Italic", ",", "Bodoni MT Bold", ",", "Bodoni MT Condensed Bold", ",", "Bodoni MT Bold Italic", ",", "Bodoni MT Condensed Bold Italic", ",", "Bodoni MT Black", ",", "Bodoni MT Black Italic", ",", "Bodoni MT Poster Compressed Light", ",", "Book Antiqua", ",", "Book Antiqua Italic", ",", "Book Antiqua Bold", ",", "Book Antiqua Bold Italic", ",", "Bookman Old Style", ",", "Bookman Old Style Italic", ",", "Bookman Old Style Bold", ",", "Bookman Old Style Bold Italic", ",", "Bookshelf Symbol 7", ",", "BR-OCRB", ",", "Bradley Hand ITC", ",", "Britannic Bold", ",", "Broadway", ",", "Brush Script MT Italic", ",", "Brussels Light", ",", "Brussels Condensed Light", ",", "Brussels Light Italic", ",", "Brussels Condensed Light Italic", ",", "Brussels Demi", ",", "Brussels Condensed Demi", ",", "Brussels Demi Italic", ",", "Brussels Condensed Demi Italic", ",", "Calibri Light", ",", "Calibri Light Italic", ",", "Calibri", ",", "Calibri Italic", ",", "Calibri Bold", ",", "Calibri Bold Italic", ",", "Californian FB", ",", "Californian FB Italic", ",", "Californian FB Bold", ",", "Calisto MT", ",", "Calisto MT Italic", ",", "Calisto MT Bold", ",", "Calisto MT Bold Italic", ",", "Cambria", ",", "Cambria Italic", ",", "Cambria Bold", ",", "Cambria Bold Italic", ",", "Cambria Math", ",", "Candara Light", ",", "Candara Light Italic", ",", "Candara", ",", "Candara Italic", ",", "Candara Bold", ",", "Candara Bold Italic", ",", "Castellar", ",", "Centaur", ",", "Century", ",", "Century Gothic", ",", "Century Gothic Italic", ",", "Century Gothic Bold", ",", "Century Gothic Bold Italic", ",", "Century Schoolbook", ",", "Century Schoolbook Italic", ",", "Century Schoolbook Bold", ",", "Century Schoolbook Bold Italic", ",", "Chiller", ",", "Colonna MT", ",", "Comfortaa Light", ",", "Comfortaa", ",", "Comfortaa Bold", ",", "Comic Sans MS", ",", "Comic Sans MS Italic", ",", "Comic Sans MS Bold", ",", "Comic Sans MS Bold Italic", ",", "Connecticut Italic", ",", "Consolas", ",", "Consolas Italic", ",", "Consolas Bold", ",", "Consolas Bold Italic", ",", "Constantia", ",", "Constantia Italic", ",", "Constantia Bold", ",", "Constantia Bold Italic", ",", "Cooper Black", ",", "Copperplate Gothic Light", ",", "Copperplate Gothic Bold", ",", "Corbel Light", ",", "Corbel Light Italic", ",", "Corbel", ",", "Corbel Italic", ",", "Corbel Bold", ",", "Corbel Bold Italic", ",", "Courier New", ",", "Courier New Italic", ",", "Courier New Bold", ",", "Courier New Bold Italic", ",", "Curlz MT", ",", "Dubai Light", ",", "Dubai", ",", "Dubai Medium", ",", "Dubai Bold", ",", "Ebrima", ",", "Ebrima Bold", ",", "Edwardian Script ITC", ",", "Elephant", ",", "Elephant Italic", ",", "Engravers MT", ",", "Eras ITC Light", ",", "Eras ITC Medium", ",", "Eras ITC Demi", ",", "Eras ITC Bold", ",", "Felix Titling", ",", "Footlight MT Light", ",", "Forte", ",", "Franklin Gothic Medium", ",", "Franklin Gothic Cond Medium", ",", "Franklin Gothic Medium Italic", ",", "Franklin Gothic Demi", ",", "Franklin Gothic Cond Demi", ",", "Franklin Gothic Demi Italic", ",", "Franklin Gothic Heavy", ",", "Franklin Gothic Heavy Italic", ",", "Franklin Gothic Book", ",", "Franklin Gothic Book Italic", ",", "Freestyle Script", ",", "French Script MT", ",", "Gabriola", ",", "Gadugi", ",", "Gadugi Bold", ",", "Garamond", ",", "Garamond Italic", ",", "Garamond Bold", ",", "Georgia", ",", "Georgia Italic", ",", "Georgia Bold", ",", "Georgia Bold Italic", ",", "Germany", ",", "Gigi", ",", "Gill Sans Ultra Bold", ",", "Gill Sans Condensed Ultra Bold", ",", "Gill Sans MT", ",", "Gill Sans MT Condensed", ",", "Gill Sans MT Italic", ",", "Gill Sans MT Bold", ",", "Gill Sans MT Ext Condensed Bold", ",", "Gill Sans MT Bold Italic", ",", "Gloucester MT Extra Condensed", ",", "Goudy Old Style", ",", "Goudy Old Style Italic", ",", "Goudy Old Style Bold", ",", "Goudy Stout", ",", "Haettenschweiler", ",", "Harlow Solid SemiExpanded Italic", ",", "Harrington", ",", "Helsinki", ",", "Helsinki Narrow", ",", "Helsinki Oblique", ",", "Helsinki Narrow Oblique", ",", "Helsinki Bold", ",", "Helsinki Narrow Bold", ",", "Helsinki Bold Oblique", ",", "Helsinki Narrow Bold Oblique", ",", "High Tower Text", ",", "High Tower Text Italic", ",", "HoloLens MDL2 Assets", ",", "Impact", ",", "Imprint MT Shadow", ",", "Informal Roman", ",", "Ink Free", ",", "Istanbul", ",", "Javanese Text", ",", "Jokerman", ",", "Juice ITC", ",", "Kristen ITC", ",", "Kunstler Script", ",", "Lato Thin", ",", "Lato Thin Italic", ",", "Lato Light", ",", "Lato Light Italic", ",", "Lato", ",", "Lato Italic", ",", "Lato Medium", ",", "Lato Medium Italic", ",", "Lato Semibold", ",", "Lato Semibold Italic", ",", "Lato Bold", ",", "Lato Bold Italic", ",", "Lato Heavy", ",", "Lato Heavy Italic", ",", "Lato Black", ",", "Lato Black Italic", ",", "Lato Hairline", ",", "Lato Hairline Italic", ",", "Leelawadee", ",", "Leelawadee Bold", ",", "Leelawadee UI Semilight", ",", "Leelawadee UI", ",", "Leelawadee UI Bold", ",", "Letter Gothic", ",", "Letter Gothic Oblique", ",", "Letter Gothic Bold", ",", "Lucida Bright", ",", "Lucida Bright Italic", ",", "Lucida Bright Demibold", ",", "Lucida Bright Demibold Italic", ",", "Lucida Calligraphy Italic", ",", "Lucida Console", ",", "Lucida Fax", ",", "Lucida Fax Italic", ",", "Lucida Fax Demibold", ",", "Lucida Fax Demibold Italic", ",", "Lucida Handwriting Italic", ",", "Lucida Sans", ",", "Lucida Sans Italic", ",", "Lucida Sans Demibold Roman", ",", "Lucida Sans Demibold Italic", ",", "Lucida Sans Typewriter", ",", "Lucida Sans Typewriter Oblique", ",", "Lucida Sans Typewriter Bold", ",", "Lucida Sans Typewriter Bold Oblique", ",", "Lucida Sans Unicode", ",", "Magneto Bold", ",", "Maiandra GD", ",", "Malgun Gothic Semilight", ",", "Malgun Gothic", ",", "Malgun Gothic Bold", ",", "Marlett", ",", "Matura MT Script Capitals", ",", "Microsoft Himalaya", ",", "Microsoft JhengHei Light", ",", "Microsoft JhengHei", ",", "Microsoft JhengHei Bold", ",", "Microsoft JhengHei UI Light", ",", "Microsoft JhengHei UI", ",", "Microsoft JhengHei UI Bold", ",", "Microsoft New Tai Lue", ",", "Microsoft New Tai Lue Bold", ",", "Microsoft PhagsPa", ",", "Microsoft PhagsPa Bold", ",", "Microsoft Sans Serif", ",", "Microsoft Tai Le", ",", "Microsoft Tai Le Bold", ",", "Microsoft Uighur", ",", "Microsoft Uighur Bold", ",", "Microsoft YaHei Light", ",", "Microsoft YaHei", ",", "Microsoft YaHei Bold", ",", "Microsoft YaHei UI Light", ",", "Microsoft YaHei UI", ",", "Microsoft YaHei UI Bold", ",", "Microsoft Yi Baiti", ",", "MingLiU-ExtB", ",", "MingLiU_HKSCS-ExtB", ",", "Mistral", ",", "Modern No. 20", ",", "Mongolian Baiti", ",", "Monotype Corsiva", ",", "MS Gothic", ",", "MS Outlook", ",", "MS PGothic", ",", "MS Reference Sans Serif", ",", "MS Reference Specialty", ",", "MS UI Gothic", ",", "MT Extra", ",", "MV Boli", ",", "Myanmar Text", ",", "Myanmar Text Bold", ",", "Niagara Engraved", ",", "Niagara Solid", ",", "Nirmala UI Semilight", ",", "Nirmala UI", ",", "Nirmala UI Bold", ",", "NSimSun", ",", "OCR A Extended", ",", "Old English Text MT", ",", "Onyx", ",", "Palace Script MT", ",", "Palatino Linotype", ",", "Palatino Linotype Italic", ",", "Palatino Linotype Bold", ",", "Palatino Linotype Bold Italic", ",", "Papyrus", ",", "Parchment", ",", "Perpetua", ",", "Perpetua Italic", ",", "Perpetua Bold", ",", "Perpetua Bold Italic", ",", "Perpetua Titling MT Light", ",", "Perpetua Titling MT Bold", ",", "Playbill", ",", "PMingLiU-ExtB", ",", "Poor Richard", ",", "Pristina", ",", "PT Dingbats 1", ",", "PT Dingbats 2", ",", "PT Dingbats 3", ",", "PT Dingbats 4", ",", "PT Symbol 1", ",", "PT Symbol 2", ",", "PT Utah Condensed", ",", "PT Utah Condensed Oblique", ",", "PT Utah Condensed Bold", ",", "PT Utah Condensed Bold Oblique", ",", "Rage Italic", ",", "Ravie", ",", "Rockwell", ",", "Rockwell Condensed", ",", "Rockwell Italic", ",", "Rockwell Bold", ",", "Rockwell Condensed Bold", ",", "Rockwell Bold Italic", ",", "Rockwell Extra Bold", ",", "San Diego", ",", "Script MT Bold", ",", "Segoe MDL2 Assets", ",", "Segoe Print", ",", "Segoe Print Bold", ",", "Segoe Script", ",", "Segoe Script Bold", ",", "Segoe UI Light", ",", "Segoe UI Light Italic", ",", "Segoe UI Semilight", ",", "Segoe UI Semilight Italic", ",", "Segoe UI", ",", "Segoe UI Italic", ",", "Segoe UI Semibold", ",", "Segoe UI Semibold Italic", ",", "Segoe UI Bold", ",", "Segoe UI Bold Italic", ",", "Segoe UI Black", ",", "Segoe UI Black Italic", ",", "Segoe UI Emoji", ",", "Segoe UI Historic", ",", "Segoe UI Symbol", ",", "Showcard Gothic", ",", "SimSun", ",", "SimSun-ExtB", ",", "Sitka Banner", ",", "Sitka Banner Italic", ",", "Sitka Banner Bold", ",", "Sitka Banner Bold Italic", ",", "Sitka Display", ",", "Sitka Display Italic", ",", "Sitka Display Bold", ",", "Sitka Display Bold Italic", ",", "Sitka Heading", ",", "Sitka Heading Italic", ",", "Sitka Heading Bold", ",", "Sitka Heading Bold Italic", ",", "Sitka Small", ",", "Sitka Small Italic", ",", "Sitka Small Bold", ",", "Sitka Small Bold Italic", ",", "Sitka Subheading", ",", "Sitka Subheading Italic", ",", "Sitka Subheading Bold", ",", "Sitka Subheading Bold Italic", ",", "Sitka Text", ",", "Sitka Text Italic", ",", "Sitka Text Bold", ",", "Sitka Text Bold Italic", ",", "Snap ITC", ",", "Spectral ExtraLight", ",", "Spectral ExtraLight Italic", ",", "Spectral Light", ",", "Spectral Light Italic", ",", "Spectral", ",", "Spectral Italic", ",", "Spectral Medium", ",", "Spectral Medium Italic", ",", "Spectral SemiBold", ",", "Spectral SemiBold Italic", ",", "Spectral Bold", ",", "Spectral Bold Italic", ",", "Spectral ExtraBold", ",", "Spectral ExtraBold Italic", ",", "Stencil", ",", "Sylfaen", ",", "Symbol", ",", "Tahoma", ",", "Tahoma Bold", ",", "TeamViewer15 Medium", ",", "Tempus Sans ITC", ",", "Times New Roman", ",", "Times New Roman Italic", ",", "Times New Roman Bold", ",", "Times New Roman Bold Italic", ",", "Trebuchet MS", ",", "Trebuchet MS Italic", ",", "Trebuchet MS Bold", ",", "Trebuchet MS Bold Italic", ",", "Tw Cen MT", ",", "Tw Cen MT Condensed", ",", "Tw Cen MT Italic", ",", "Tw Cen MT Bold", ",", "Tw Cen MT Condensed Bold", ",", "Tw Cen MT Bold Italic", ",", "Tw Cen MT Condensed Extra Bold", ",", "Unispace Bold", ",", "US Roman", ",", "Utah", ",", "Utah Oblique", ",", "Utah Bold", ",", "Utah Bold Oblique", ",", "Verdana", ",", "Verdana Italic", ",", "Verdana Bold", ",", "Verdana Bold Italic", ",", "Viner Hand ITC", ",", "Vivaldi Italic", ",", "Vladimir Script", ",", "Webdings", ",", "Wide Latin", ",", "Wingdings", ",", "Wingdings 2", ",", "Wingdings 3", ",", "Yu Gothic Light", ",", "Yu Gothic", ",", "Yu Gothic Medium", ",", "Yu Gothic Bold", ",", "Yu Gothic UI Light", ",", "Yu Gothic UI Semilight", ",", "Yu Gothic UI", ",", "Yu Gothic UI Semibold", ",", "Yu Gothic UI Bold", ",", "ZWAdobeF" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 578.5, 641.0, 147.0, 23.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "jit_matrix", "" ],
					"patching_rect" : [ 742.0, 630.0, 382.0, 22.0 ],
					"text" : "jit.gl.videoplane media-displays @transform_reset 2 @blend_enable 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 742.0, 595.0, 66.0, 22.0 ],
					"text" : "jit.gl.text2d"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 264.0, 227.20000022649765, 41.0, 22.0 ],
					"text" : "set $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 316.0, 242.0, 53.0, 22.0 ],
					"text" : "prepend"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"patching_rect" : [ 268.0, 165.0, 29.5, 22.0 ],
					"text" : "t l b"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 4,
					"outlettype" : [ "int", "", "", "int" ],
					"patching_rect" : [ 264.0, 197.0, 61.0, 22.0 ],
					"text" : "counter"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 264.0, 134.0, 59.0, 22.0 ],
					"text" : "route text"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "textedit",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 140.5, 50.5, 193.0, 59.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 625.0, 331.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 625.0, 364.0, 61.0, 22.0 ],
					"text" : "enable $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "jit_gl_texture", "bang", "" ],
					"patching_rect" : [ 625.0, 395.0, 135.0, 22.0 ],
					"text" : "jit.world media_displays"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "jit_matrix", "" ],
					"patching_rect" : [ 306.0, 528.0, 171.0, 22.0 ],
					"text" : "jit.gl.videoplane media_diplays"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-52",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 160.25, 198.0, 34.0, 22.0 ],
					"text" : "print"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-53",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 140.5, 153.0, 98.0, 22.0 ],
					"text" : "regexp \\\\.(\\\\w+)$"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-32",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "int" ],
					"patching_rect" : [ 140.5, 121.0, 55.0, 22.0 ],
					"text" : "strippath"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-26",
					"maxclass" : "dropfile",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 140.5, 50.5, 191.0, 59.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 2.0, 58.5, 187.0, 55.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"source" : [ "obj-14", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-84", 0 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"source" : [ "obj-53", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-83", 1 ],
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"source" : [ "obj-84", 1 ]
				}

			}
 ],
		"dependency_cache" : [  ],
		"autosave" : 0
	}

}
