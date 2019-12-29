local template = require "resty.template";
local template_string = ngx.location.capture("/templates/lua/view.html")
template.render(template_string.body, {
    message = ngx.req.get_uri_args()["message"]
})
