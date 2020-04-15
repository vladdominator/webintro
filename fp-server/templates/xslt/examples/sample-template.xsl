<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:key name="students-by-group" match="student" use="@group" />

    <xsl:template match="/">
        <html>
            <body>
                <h1>University</h1>
                <!-- //student[count(. |  key('students-by-group', @group)[1] ) = 1 -->
                <!-- //student[@group=9] -->
                <h2>Count:<xsl:value-of select="count(key('students-by-group', 9))"/></h2>
                <xsl:apply-templates select="//student[generate-id(.) = generate-id(key('students-by-group', @group)[1] )]"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="student">
        <h1><xsl:value-of select="@group"/></h1>
        <ul>
            <xsl:apply-templates select="key('students-by-group', @group)" mode="grouping"/>
        </ul>
    </xsl:template>

    <xsl:template match="student" mode="grouping">
        <li><xsl:value-of select="generate-id(.)"/>
            <xsl:value-of select="@name"/> (<xsl:value-of select="@group"/>)</li>
    </xsl:template>

</xsl:stylesheet>
