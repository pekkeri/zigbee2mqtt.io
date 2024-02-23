"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37543],{577126:(e,o,d)=>{d.r(o),d.d(o,{data:()=>t});const t=JSON.parse('{"key":"v-a514e52a","path":"/devices/ZFP-1A-CH.html","title":"Siglis ZFP-1A-CH control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Siglis ZFP-1A-CH control via MQTT","description":"Integrate your Siglis ZFP-1A-CH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1708715895000},"filePathRelative":"devices/ZFP-1A-CH.md"}')},14865:(e,o,d)=>{d.r(o),d.d(o,{default:()=>p});var t=d(166252);const l=(0,t._)("h1",{id:"siglis-zfp-1a-ch",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#siglis-zfp-1a-ch","aria-hidden":"true"},"#"),(0,t.Uk)(" Siglis ZFP-1A-CH")],-1),c=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])],-1),i=(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"ZFP-1A-CH")],-1),n=(0,t._)("td",null,"Vendor",-1),a=(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"zigfred plus smart in-wall switch")],-1),u=(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"action, linkquality")],-1),s=(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZFP-1A-CH.png",alt:"Siglis ZFP-1A-CH"})])],-1),r=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),h=(0,t.uE)('<ul><li><p><code>front_surface_enabled</code>: Front Surface LED enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_enabled</code>: Dimmer 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_dimming_enabled</code>: Dimmer 1 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_enabled</code>: Dimmer 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_dimming_enabled</code>: Dimmer 2 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_enabled</code>: Dimmer 3 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_dimming_enabled</code>: Dimmer 3 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_enabled</code>: Dimmer 4 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_dimming_enabled</code>: Dimmer 4 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_enabled</code>: Cover 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_tilt_enabled</code>: Cover 1 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_enabled</code>: Cover 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_tilt_enabled</code>: Cover 2 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_3_single</code>, <code>button_3_double</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_4_single</code>, <code>button_4_double</code>, <code>button_4_hold</code>, <code>button_4_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),m={},p=(0,d(983744).Z)(m,[["render",function(e,o){const d=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.kq)(" !!!! "),(0,t.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,t.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,t.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,t.kq)(" !!!! "),l,(0,t._)("table",null,[c,(0,t._)("tbody",null,[i,(0,t._)("tr",null,[n,(0,t._)("td",null,[(0,t.Wm)(d,{to:"/supported-devices/#v=Siglis"},{default:(0,t.w5)((()=>[(0,t.Uk)("Siglis")])),_:1})])]),a,u,s])]),(0,t.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,t.kq)(" Notes END: Do not edit below this line "),r,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(d,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[(0,t.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);