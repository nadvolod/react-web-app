describe('My React application', () => {   
    it('should look correct', () => {
        browser.url('');
        browser.execute('/*@visual.init*/', 'My React App');
        browser.execute('/*@visual.snapshot*/', 'Home Page');
        const result = browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});